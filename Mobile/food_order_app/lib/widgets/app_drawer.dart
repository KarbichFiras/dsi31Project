import 'package:flutter/material.dart';

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
            title: Text('Foods'),
            trailing: Icon(Icons.arrow_forward),
            onTap: () {
              print('Shop');
              // Navigator.push(context, MaterialPageRoute(builder:(cnx){return /* food routing */}));
            },
          ),
        ],
      ),
    );
  }
}
