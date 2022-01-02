import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:food_order_app/providers/cart.dart';
import 'package:food_order_app/screens/cart_screen.dart';
import 'package:food_order_app/widgets/app_drawer.dart';
import 'package:food_order_app/widgets/badge.dart';
import 'package:provider/provider.dart';
import '../widgets/restaurants_grid.dart';

class RestauarantsOverviewScreen extends StatelessWidget {
  static const routeName = '/restaurantsOverviewScreen';

  @override
  Widget build(BuildContext context) {
   SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: Colors.red,
      statusBarBrightness: Brightness.light,
    ));
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(' wakalni'),
        actions: [

          Consumer<Cart>(
            builder: (context,cart,child)=>Badge(
              child:  IconButton(
                icon: Icon(Icons.shopping_cart),
                color: Colors.white,
                onPressed: () {Navigator.of(context).pushNamed(CartScreen.routeName);},
              ),
              value: cart.itemCount.toString(),
              color: Colors.black,
            ),
          )
        ],
      ),
      drawer: AppDrawer(),
      body: RestaurantsGrid(),
    );
  }
}
