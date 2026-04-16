import 'package:crypto/components/appbar.dart';
import 'package:crypto/theme/color_resources.dart';
import 'package:crypto/homescreen.dart';
import 'package:crypto/theme/decorations.dart';
import 'package:crypto/theme/images.dart';
import 'package:crypto/theme/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  final PageController pageController = PageController();

  int selectedIndex = 0;
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorResources.colorWhite,
      key: _scaffoldKey,
      drawer: Drawer(
        backgroundColor: ColorResources.colorWhite,
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            Container(
              height: 150,
              color: ColorResources.colorPrimary,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Image.asset(ImagesResources.logo, height: 20),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12.0),
              child: Column(
                children: [
                  ListTile(
                    leading: SvgPicture.asset(
                      ImagesResources.details,
                      width: 30,
                      height: 30,
                      color: ColorResources.colorPrimary,
                    ),
                    title: Text(
                      "Details",
                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size14,
                        ColorResources.colorPrimary,
                      ),
                    ),
                    onTap: () {},
                  ),
                  ListTile(
                    leading: SvgPicture.asset(
                      ImagesResources.share,
                      width: 30,
                      height: 30,
                      color: ColorResources.colorPrimary,
                    ),
                    title: Text(
                      "Share",
                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size14,
                        ColorResources.colorPrimary,
                      ),
                    ),
                    onTap: () {},
                  ),
                  ListTile(
                    leading: SvgPicture.asset(
                      ImagesResources.message,
                      width: 30,
                      height: 30,
                      color: ColorResources.colorPrimary,
                    ),
                    title: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Live Chat",
                          style: AppTextStyles.ralewayTextStylew700(
                            AppTextStyles.size14,
                            ColorResources.colorPrimary,
                          ),
                        ),
                        Container(
                          width: 20,
                          height: 20,
                          decoration:
                              AppContainerDecorationStyles.ContainerDecorationButton(
                                ColorResources.colorGreen,
                                ColorResources.colorCardGrey,
                              ),
                          child: Center(
                            child: Text(
                              "1",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size10,
                                ColorResources.colorWhite,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    onTap: () {},
                  ),

                  ListTile(
                    leading: SvgPicture.asset(
                      ImagesResources.arrowUp,
                      width: 30,
                      height: 30,
                      color: ColorResources.colorPrimary,
                    ),
                    title: Text(
                      "Trade",
                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size14,
                        ColorResources.colorPrimary,
                      ),
                    ),
                    onTap: () {},
                  ),
                  ListTile(
                    leading: Icon(Icons.logout),
                    title: Text(
                      " Logout",
                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size14,
                        ColorResources.colorPrimary,
                      ),
                    ),
                    onTap: () {},
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      body: PageView(
        controller: pageController,
        physics: const NeverScrollableScrollPhysics(),
        onPageChanged: (int index) {
          setState(() {});
        },
        children: [HomeScreen(scaffoldKey: _scaffoldKey)],
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.only(
          left: 16,
          right: 16,
          bottom: 20,
          top: 10,
        ),
        decoration: BoxDecoration(
          color: Colors.transparent,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 10,
              offset: const Offset(0, -5),
            ),
          ],
        ),
        child: Row(
          children: [
            Expanded(
              child: Container(
                height: 40,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF6236FF), Color(0xFF4B26D1)],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF6236FF).withOpacity(0.3),
                      blurRadius: 8,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Center(
                  child: Text(
                    "Login",
                    style: AppTextStyles.ralewayTextStylew700(
                      AppTextStyles.size16,
                      ColorResources.colorWhite,
                    ),
                  ),
                ),
              ),
            ),

            const SizedBox(width: 12),

            Expanded(
              child: Container(
                height: 40,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(
                    color: const Color(0xFF6236FF),
                    width: 1.5,
                  ),
                ),
                child: Center(
                  child: Text(
                    "Register",
                    style: AppTextStyles.ralewayTextStylew700(
                      AppTextStyles.size16,
                      ColorResources.colorToogleblue,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
