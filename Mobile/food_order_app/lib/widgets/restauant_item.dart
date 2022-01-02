import 'package:flutter/material.dart';
import 'package:food_order_app/providers/cart.dart';
import 'package:food_order_app/screens/restaurant_overview_screen.dart';
import 'package:provider/provider.dart';
import 'package:food_order_app/providers/restaurant.dart';
import '../screens/foods_overview_screen.dart';
class RestaurantItem extends StatelessWidget {

/*
  final String id;
  final String title;
  final String imageUrl;
*/

  RestaurantItem();

  @override
  Widget build(BuildContext context) {

    //final food = Provider.of<Food>(context);

    final cart = Provider.of<Cart>(context,listen: false);

    print('called build method');

    return Consumer<Restaurant>(
      builder: (context,restaurant,child)=>ClipRRect(
        borderRadius: BorderRadius.circular(10),
        child: GridTile(
          child: GestureDetector(
            onTap: () {
              Navigator.of(context).pushNamed(
                  FoodsOverviewScreen.routeName,
                  arguments: restaurant.id
              );
            },
            child: Image.asset(
              restaurant.imageUrl,
              fit: BoxFit.fitHeight,
            ),
          ),
          footer: GridTileBar(
            backgroundColor: Colors.black45,
            leading: IconButton(
              icon: Icon(restaurant.isFavorite?Icons.favorite:Icons.favorite_border),
              color: Theme.of(context).accentColor,
              onPressed: () {
                restaurant.toggleFavoriteData();
              },
            ),
            title: Text(
              restaurant.title,
              textAlign: TextAlign.center,
            ),
            trailing: IconButton(

              icon: Icon(

                Icons.arrow_forward,
              ),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder:(cnx){return FoodsOverviewScreen();}));

              },
              color: Theme.of(context).accentColor,
            ),
          ),
        ),
      ),
    );
  }
}
