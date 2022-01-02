import 'package:flutter/material.dart';
import 'package:food_order_app/screens/foods_overview_screen.dart';
import 'package:food_order_app/screens/restaurant_overview_screen.dart';

class AppDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          UserAccountsDrawerHeader(
            accountName: Text('UserName'),
            accountEmail: Text('user@gmail.com'),
            currentAccountPicture: CircleAvatar(
              child: Image.asset('assets/images/Sample_User_Icon.png'),
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
            title: Text('Restaurant'),
            trailing: Icon(Icons.arrow_forward),
            onTap: () {
              print('Shop');
              Navigator.push(context, MaterialPageRoute(builder: (cnx) {
                return RestauarantsOverviewScreen();
              }));
            },
          ),
          ListTile(
            title: Text('Food'),
            trailing: Icon(Icons.arrow_forward),
            onTap: () {
              print('Orders');
              Navigator.push(context, MaterialPageRoute(builder: (cnx) {
                return FoodsOverviewScreen();
              }));
            },
          ),
          /*ListTile(
    title: Text('cart'),
    trailing: Icon(Icons.arrow_forward),
    onTap: (){
    print('Orders');
    //Navigator.push(context, MaterialPageRoute(builder:(cnx){return }));
    },
    ),*/
          ListTile(
            title: Text('Logout'),
            trailing: Icon(Icons.arrow_forward),
            onTap: () {
              print('Orders');
              Navigator.pushReplacementNamed(context, '/login');
            },
          ),
        ],
      ),
    );
  }
}
