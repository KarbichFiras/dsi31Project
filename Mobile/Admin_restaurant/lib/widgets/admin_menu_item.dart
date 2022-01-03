
import 'package:admin_restaurant/providers/food.dart';
import 'package:admin_restaurant/providers/foods.dart';
import 'package:admin_restaurant/providers/menu.dart';
import 'package:admin_restaurant/providers/menus.dart';
import 'package:admin_restaurant/screens/edit_item.dart';
import 'package:admin_restaurant/screens/edit_menu_item.dart';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

class UserMenuItem extends StatelessWidget {

  /*final String itemId;
  final String title;
  final String imageUrl;*/

  final Menu menu;

 /* Food food = Food(id: id, title: title, description: description, price: price, imageUrl: imageUrl)
*/
  UserMenuItem(this.menu, );



  @override
  Widget build(BuildContext context) {

    void removeMenuItem(){

     var menuList = Provider.of<Menus>(context, listen: false);
     menuList.removeMenuItem(menu.id);

      print('removeAMenu');
    }

    return ListTile(
      title: Text(menu.title),
      leading: CircleAvatar(
        backgroundImage: NetworkImage(menu.imageUrl),
      ),
      trailing: Container(
        width: 100,
        child: Row(
          children: <Widget>[
            IconButton(
              icon: Icon(Icons.edit),
              onPressed: () {
                Navigator.of(context).pushNamed(EditMenuItem.routeName,arguments: menu);
              },
              color: Theme.of(context).primaryColor,
            ),
            IconButton(
              icon: Icon(Icons.delete),
              onPressed: () {
                removeMenuItem();
              },
              color: Theme.of(context).errorColor,
            ),
          ],
        ),
      ),
    );
  }
}
