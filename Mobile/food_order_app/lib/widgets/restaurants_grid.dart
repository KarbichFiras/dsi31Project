import 'package:flutter/material.dart';
import 'package:food_order_app/widgets/restauant_item.dart';
import 'package:provider/provider.dart';
import '../providers/restaurants.dart';
import './food_item.dart';

class RestaurantsGrid extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {

    final restaurantData = Provider.of<Restaurants>(context);
    final restauarnts = restaurantData.items;
    return GridView.builder(
      padding: const EdgeInsets.all(10.0),
      itemCount: restauarnts.length,
      itemBuilder: (ctx, i) => ChangeNotifierProvider(

          create: (_)=>restauarnts[i],
          child:  RestaurantItem (),

      ),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 3 / 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
    );
  }
}