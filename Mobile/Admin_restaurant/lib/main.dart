import 'package:admin_restaurant/providers/menus.dart';
import 'package:admin_restaurant/screens/add_item.dart';
import 'package:admin_restaurant/screens/add_menu_item.dart';
import 'package:admin_restaurant/screens/edit_item.dart';
import 'package:admin_restaurant/screens/edit_menu_item.dart';
import 'package:admin_restaurant/screens/login_page.dart';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';
import './screens/food_detail_screen.dart';
import './providers/foods.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => Foods()),
        ChangeNotifierProvider(create: (_) => Menus()),
      ],
      child: MaterialApp(
          title: 'Image Loader',
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            primarySwatch: Colors.red,
            accentColor: Colors.white,
            fontFamily: 'Lato',
          ),
          home: FoodListScreen(),
          routes: {
            AddItem.routeName: (ctx) => AddItem(),
            EditMenuItem.routeName: (ctx) => EditMenuItem(),
            AddMenuItem.routeName: (ctx) => AddMenuItem()
          }),
    );
  }
}
