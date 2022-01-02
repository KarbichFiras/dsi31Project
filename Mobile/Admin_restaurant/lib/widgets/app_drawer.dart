
import 'package:admin_restaurant/screens/add_item.dart';
import 'package:admin_restaurant/screens/add_menu_item.dart';
import 'package:admin_restaurant/screens/food_detail_screen.dart';
import 'package:admin_restaurant/screens/food_list.dart';
import 'package:admin_restaurant/screens/menu_list.dart';
import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  Drawer(
      child: ListView(
        children: [
          const UserAccountsDrawerHeader(
            accountName: Text('UserName'),
            accountEmail: Text('user@gmail.com'),
            currentAccountPicture: CircleAvatar(
              child: Text('blastImage'),
            ),
            decoration: BoxDecoration(color: Colors.black),
           /* otherAccountsPictures: [
              CircleAvatar(
                child: Text('X'),
              ),
              CircleAvatar(
                child: Text('X'),
              )
            ],*/
          ),
          ListTile(
            title: Text('add food'),
            trailing: Icon(Icons.arrow_forward),
            onTap: (){
               Navigator.push(context, MaterialPageRoute(builder:(cnx){return AddItem();}));

              print('Shop');
            },
          ),
          ListTile(
            title: Text('Manage food'),
            trailing: Icon(Icons.arrow_forward),
            onTap: (){

              Navigator.push(context, MaterialPageRoute(builder:(cnx){return FoodListScreen();}));
            },
          ),
          ListTile(
            title: Text('add menu'),
            trailing: Icon(Icons.arrow_forward),
            onTap: (){

              Navigator.push(context, MaterialPageRoute(builder:(cnx){return AddMenuItem();}));
            },
          ),
          ListTile(
            title: Text('manage manu'),
            trailing: Icon(Icons.arrow_forward),
            onTap: (){

              Navigator.push(context, MaterialPageRoute(builder:(cnx){return MenuListScreen();}));
            },
          ),

        ],
      ),
    );
  }
}
