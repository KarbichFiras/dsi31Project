import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
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
            onTap: () {
              // Navigator.push(context, MaterialPageRoute(builder:(cnx){return }));

              print('Shop');
            },
          ),
        ],
      ),
    );
  }
}
