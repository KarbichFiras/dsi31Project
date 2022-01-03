import 'package:flutter/material.dart';

import 'package:food_order_app/providers/cart.dart';
import 'package:food_order_app/screens/cart_screen.dart';


import 'package:food_order_app/screens/login.dart';
import 'package:food_order_app/screens/register.dart';
import 'package:food_order_app/screens/restaurant_overview_screen.dart';
import 'package:food_order_app/widgets/FoodDetailScreen.dart';
import 'package:provider/provider.dart';
import './screens/foods_overview_screen.dart';
import './providers/foods.dart';
import './providers/restaurants.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [

        ChangeNotifierProvider(create: (_)=>Foods()),
        ChangeNotifierProvider(create: (_)=>Restaurants()),
        ChangeNotifierProvider(create:(_)=> Cart())

      ],
      child: MaterialApp(
        title: 'chmin9lews',
        theme: ThemeData(
          primarySwatch: Colors.red,
          accentColor: Colors.orange,
          fontFamily: 'Lato',
        ),
        home: Login(),
        routes: {
          Login.routeName: (ctx) => Login(),
          Register.routeName: (ctx) => Register(),
          RestauarantsOverviewScreen.routeName: (ctx) => RestauarantsOverviewScreen(),
          FoodDetailScreen.routeName: (ctx) => FoodDetailScreen(),
          CartScreen.routeName: (ctx) => CartScreen(),
        }
        ),

    );
  }
}
