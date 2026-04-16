import 'package:carousel_slider/carousel_options.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:crypto/components/appbar.dart';
import 'package:crypto/theme/color_resources.dart';
import 'package:crypto/theme/decorations.dart';
import 'package:crypto/theme/images.dart';
import 'package:crypto/theme/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class HomeScreen extends StatefulWidget {
  final GlobalKey<ScaffoldState> scaffoldKey;

  const HomeScreen({super.key, required this.scaffoldKey});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;

  final List<String> imgList = [
    'assets/images/png/1.jpeg',
    'assets/images/png/2.jpeg',
    'assets/images/png/3.jpeg',
    'assets/images/png/4.jpeg',
    'assets/images/png/6.jpeg',
  ];

  bool isDaily = true;

  int selectedIndex = 0;

  final List<Map<String, dynamic>> categories = [
    {'title': "Exclusive", 'icon': Icons.diamond_outlined},
    {'title': "Casino", 'icon': Icons.games},
    {'title': "Sports", 'icon': Icons.sports_soccer},
    {'title': "Poker", 'icon': Icons.style_outlined},
    {'title': "Slots", 'icon': Icons.seven_mp_outlined},
    {'title': "Crash", 'icon': Icons.rocket_launch_outlined},
    {'title': "Live", 'icon': Icons.videocam_outlined},
  ];

  final List<Map<String, String>> games = [
    {
      "title": "First Person\nDream Catcher",
      "players": "1.2K",
      "image": "assets/images/png/7.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack B",
      "players": "1.5K",
      "image": "assets/images/png/15.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack C",
      "players": "938",
      "image": "assets/images/png/16.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack C",
      "players": "1.1K",
      "image": "assets/images/png/11.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack D",
      "players": "1.3K",
      "image": "assets/images/png/12.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack E",
      "players": "1.8K",
      "image": "assets/images/png/13.jpeg",
    },
    {
      "title": "First Person\nDream Catcher",
      "players": "1.2K",
      "image": "assets/images/png/14.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack B",
      "players": "1.5K",
      "image": "assets/images/png/15.jpeg",
    },
    {
      "title": "Speed VIP\nBlackjack C",
      "players": "938",
      "image": "assets/images/png/16.jpeg",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorResources.colorWhite,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            AppbarWidget(scaffoldKey: widget.scaffoldKey),
            SizedBox(height: 10),
            Column(
              children: [
                CarouselSlider(
                  options: CarouselOptions(
                    height: 160.0,
                    autoPlay: true,
                    enlargeCenterPage: true,
                    aspectRatio: 16 / 9,
                    viewportFraction: 0.92,
                    onPageChanged: (index, reason) {
                      setState(() {
                        _currentIndex = index;
                      });
                    },
                  ),
                  items: imgList
                      .map(
                        (item) => Container(
                          margin: const EdgeInsets.symmetric(horizontal: 0.0),
                          child: ClipRRect(
                            borderRadius: const BorderRadius.all(
                              Radius.circular(10.0),
                            ),
                            child: Image.asset(
                              item,
                              fit: BoxFit.cover,
                              width: 1000,
                            ),
                          ),
                        ),
                      )
                      .toList(),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: imgList.asMap().entries.map((entry) {
                    return Container(
                      width: _currentIndex == entry.key ? 18.0 : 8.0,
                      height: 2.0,
                      margin: const EdgeInsets.symmetric(
                        vertical: 8.0,
                        horizontal: 4.0,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4),
                        color: _currentIndex == entry.key
                            ? ColorResources.colorPrimary
                            : Colors.grey.withOpacity(0.4),
                      ),
                    );
                  }).toList(),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Container(
                decoration:
                    AppContainerDecorationStyles.ContainerDecorationBanner(
                      ColorResources.colorBannerGrey,
                    ),
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8.0,
                    vertical: 6,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Icon(
                            Icons.campaign,
                            color: ColorResources.colorWhite,
                            size: 15.0,
                          ),
                          SizedBox(width: 8),
                          Text(
                            "Welcome to Playcrypto",
                            style: AppTextStyles.ralewayTextStylew400(
                              AppTextStyles.size9,
                              ColorResources.colorWhite,
                            ),
                          ),
                        ],
                      ),

                      Padding(
                        padding: const EdgeInsets.only(right: 4.0),
                        child: Text(
                          "Welcome!",
                          style: AppTextStyles.ralewayTextStylew400(
                            AppTextStyles.size9,
                            ColorResources.colorWhite,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        height: 20,
                        width: 4,
                        decoration:
                            AppContainerDecorationStyles.ContainerDecorationBanner(
                              ColorResources.colorPrimary,
                            ),
                      ),
                      SizedBox(width: 10),
                      Text(
                        "Bonus",
                        style: AppTextStyles.ralewayTextStylew900(
                          AppTextStyles.size17,
                          ColorResources.colorBannerGrey,
                        ),
                      ),
                    ],
                  ),
                  Container(
                    decoration:
                        AppContainerDecorationStyles.ContainerDecorationBanner(
                          ColorResources.colorTooglegrey,
                        ),
                    child: Row(
                      children: [
                        GestureDetector(
                          onTap: () => setState(() => isDaily = true),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: isDaily
                                  ? ColorResources.colorToogleblue
                                  : ColorResources.colorTooglegrey,
                              borderRadius: BorderRadius.circular(18),
                            ),
                            child: Text(
                              "Daily",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size10,
                                isDaily
                                    ? ColorResources.colorWhite
                                    : ColorResources.colorBlack,
                              ),
                            ),
                          ),
                        ),
                        GestureDetector(
                          onTap: () => setState(() => isDaily = false),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: !isDaily
                                  ? ColorResources.colorToogleblue
                                  : ColorResources.colorTooglegrey,
                              borderRadius: BorderRadius.circular(18),
                            ),
                            child: Text(
                              "Weekly",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size10,
                                !isDaily
                                    ? ColorResources.colorWhite
                                    : ColorResources.colorBlack,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  _buildBonusCard(
                    title: "Deposit Bonus",
                    amount: "₹0.00",
                    icon: Icons.account_balance_wallet_outlined,
                    color: const Color(0xFFebf6ee),
                    iconColor: Color(0xFF31a36c),
                    iconBoxColor: Color(0xFFd9f2dd),
                  ),
                  const SizedBox(width: 4),
                  _buildBonusCard(
                    title: "Rebate Bonus",
                    amount: "₹0.00",
                    icon: Icons.card_giftcard_outlined,
                    color: const Color(0xFFfef2e4),
                    iconColor: Color(0xFFd6aa6a),
                    iconBoxColor: Color(0xFFfdeacc),
                  ),
                  const SizedBox(width: 4),
                  _buildBonusCard(
                    title: "Lossback Bonus",
                    amount: "Coming Soon",
                    color: const Color(0xFFfde9ea),
                    icon: Icons.access_time,
                    iconColor: Color(0xFFc56b6d),
                    iconBoxColor: Color(0xFFf7d8d5),
                    isComingSoon: true,
                  ),
                  const SizedBox(width: 4),
                  _buildBonusCard(
                    title: "Total Bonus",
                    amount: "₹0.00",
                    icon: Icons.wallet_outlined,
                    color: const Color(0xFFf0ecfd),
                    iconColor: Color(0xFF7f5fdc),
                    iconBoxColor: Color(0xFFe6e0fb),
                    isClaim: true,
                  ),
                ],
              ),
            ),
            SizedBox(height: 5),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: 8.0,
                vertical: 8.0,
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 35,
                      decoration: BoxDecoration(
                        color: const Color(0xFFF1F2F6),
                        borderRadius: BorderRadius.circular(25),
                      ),
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: 'Search "Teen Patti"',
                          hintStyle: AppTextStyles.ralewayTextStylew400(
                            AppTextStyles.size11,
                            ColorResources.colorGrey,
                          ),
                          prefixIcon: Icon(Icons.search, color: Colors.black87),
                          border: InputBorder.none,
                          contentPadding: EdgeInsets.only(bottom: 10),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Container(
                    height: 35,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      color: ColorResources.colorToogleblue,
                      borderRadius: BorderRadius.circular(25),
                      boxShadow: [
                        BoxShadow(
                          color: ColorResources.colorToogleblue.withOpacity(
                            0.3,
                          ),
                          blurRadius: 8,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Row(
                      children: [
                        Icon(Icons.sms_rounded, color: Colors.white, size: 18),
                        SizedBox(width: 8),
                        Text(
                          "Live Chat",
                          style: AppTextStyles.ralewayTextStylew700(
                            AppTextStyles.size13,
                            ColorResources.colorWhite,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 5),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: Row(
                  children: categories.asMap().entries.map<Widget>((entry) {
                    int index = entry.key;
                    var item = entry.value;

                    bool isSelected = (selectedIndex) == index;

                    return GestureDetector(
                      onTap: () {
                        setState(() {
                          selectedIndex = index;
                        });
                      },
                      child: Container(
                        width: 75,
                        margin: const EdgeInsets.only(right: 12),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        decoration: BoxDecoration(
                          color: isSelected
                              ? const Color(0xFFfeecc8)
                              : const Color(0xFFe9e6f5),
                          borderRadius: BorderRadius.circular(15),
                          border: Border.all(
                            color: isSelected
                                ? Color(0xFFf0c774)
                                : Colors.transparent,
                            width: 1.5,
                          ),
                        ),
                        child: Column(
                          children: [
                            Icon(item['icon'], color: Color(0xFF3a3a57)),
                            const SizedBox(height: 4),
                            Text(
                              item['title'],

                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size11,
                                Color(0xFF3a3a57),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                children: [
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: games.length,
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 3,
                          crossAxisSpacing: 12,
                          mainAxisSpacing: 12,
                          childAspectRatio: 0.68,
                        ),
                    itemBuilder: (context, index) {
                      final game = games[index];
                      return GameCard(
                        title: game["title"]!,
                        players: game["players"]!,
                        image: game["image"]!,
                      );
                    },
                  ),

                  const SizedBox(height: 12),

                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 40,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(30),
                      gradient: const LinearGradient(
                        colors: [Color(0xfff7c873), Color(0xffe7a93c)],
                      ),
                    ),
                    child: Text(
                      "LOAD MORE",
                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size12,
                        ColorResources.colorBannerGrey,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 30),
            Container(
              decoration: BoxDecoration(
                color: const Color.fromARGB(255, 223, 213, 213),
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(10),
                  topRight: Radius.circular(10),
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 16.0,
                  vertical: 30,
                ),
                child: Column(
                  children: [
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 70.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              "About Us",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size12,
                                ColorResources.colorBannerGrey,
                              ),
                            ),
                            Text(
                              "Privacy Policy",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size12,
                                ColorResources.colorBannerGrey,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    SizedBox(height: 10),
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              "Terms & Conditions",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size12,
                                ColorResources.colorBannerGrey,
                              ),
                            ),
                            Text(
                              "Responsible Gaming",
                              style: AppTextStyles.ralewayTextStylew700(
                                AppTextStyles.size12,
                                ColorResources.colorBannerGrey,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    SizedBox(height: 10),
                    Center(
                      child: Text(
                        "2026 Playcrypto365, All rights reserved",
                        style: AppTextStyles.ralewayTextStylew400(
                          AppTextStyles.size9,
                          ColorResources.colorBannerGrey,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBonusCard({
    required String title,
    required String amount,
    required IconData icon,
    required Color color,
    required Color iconColor,
    required Color iconBoxColor,
    bool isComingSoon = false,
    bool isClaim = false,
  }) {
    return Expanded(
      child: Container(
        height: 90,
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 5,
              spreadRadius: 2,
              offset: const Offset(0, 4),
            ),
          ],
          border: Border.all(color: ColorResources.colorWhite, width: 2),
        ),
        child: Padding(
          padding: const EdgeInsets.only(left: 8.0, right: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              isClaim
                  ? FittedBox(
                      child: Column(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 4,
                              vertical: 4,
                            ),
                            decoration: BoxDecoration(
                              gradient: const LinearGradient(
                                colors: [Color(0xFFFDC830), Color(0xFFF37335)],
                              ),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(
                                  icon,
                                  color: ColorResources.colorBannerGrey,
                                  size: 14,
                                ), // Smaller icon
                                const SizedBox(width: 4),
                                Text(
                                  "Claim All",
                                  style: AppTextStyles.ralewayTextStylew900(
                                    AppTextStyles.size10,
                                    ColorResources.colorBannerGrey,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: 15),
                        ],
                      ),
                    )
                  : Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: ColorResources.colorWhite.withOpacity(0.6),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(icon, color: iconColor, size: 20),
                    ),
              const SizedBox(height: 8),
              Text(
                title,
                textAlign: TextAlign.center,
                style: AppTextStyles.ralewayTextStylew700(
                  AppTextStyles.size8,
                  ColorResources.colorBannerGrey,
                ),
              ),
              isComingSoon
                  ? Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 4,
                        vertical: 2,
                      ),
                      decoration: BoxDecoration(
                        color: Color(0xFFfadbd0),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        "Coming Soon",
                        style: AppTextStyles.ralewayTextStylew400(
                          AppTextStyles.size8,
                          const Color.fromARGB(255, 247, 126, 46),
                        ),
                      ),
                    )
                  : Text(
                      amount,
                      style: const TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w900,
                        fontFamily: 'Poppins',
                        color: Colors.black,
                      ),
                    ),
            ],
          ),
        ),
      ),
    );
  }
}

class GameCard extends StatelessWidget {
  final String title;
  final String players;
  final String image;

  const GameCard({
    super.key,
    required this.title,
    required this.players,
    required this.image,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        color: Colors.white,
        border: Border.all(color: ColorResources.colorBlack, width: 0.5),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Stack(
          children: [
            Positioned.fill(child: Image.asset(image, fit: BoxFit.cover)),

            Positioned(
              top: 5,
              right: 5,
              child: Container(
                width: 30,
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  gradient: const LinearGradient(
                    colors: [Color(0xffe84c7f), Color(0xff7b2ff7)],
                  ),
                ),
                child: Text(
                  "LIVE",
                  style: AppTextStyles.ralewayTextStylew400(
                    AppTextStyles.size8,
                    ColorResources.colorWhite,
                  ),
                ),
              ),
            ),

            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [Colors.white, Colors.white70, Colors.transparent],
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Center(
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 6,
                        ),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          gradient: const LinearGradient(
                            colors: [Color(0xfff7c873), Color(0xffe7a93c)],
                          ),
                        ),
                        child: Text(
                          "BET NOW",
                          style: AppTextStyles.ralewayTextStylew700(
                            AppTextStyles.size8,
                            ColorResources.colorBannerGrey,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      title,
                      style: AppTextStyles.ralewayTextStylew900(
                        AppTextStyles.size10,
                        ColorResources.colorBannerGrey,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
