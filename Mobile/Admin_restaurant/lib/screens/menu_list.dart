import 'package:admin_restaurant/providers/foods.dart';
import 'package:admin_restaurant/providers/menus.dart';
import 'package:admin_restaurant/widgets/admin_menu_item.dart';
import 'package:admin_restaurant/widgets/app_drawer.dart';
import 'package:admin_restaurant/widgets/admin_food_item.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'add_item.dart';
import 'add_menu_item.dart';

class MenuListScreen extends StatelessWidget {

  static const routeName = '/menu-list';

  @override
  Widget build(BuildContext context) {

    final menusData = Provider.of<Menus>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Menu'),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              Navigator.of(context).pushNamed(AddMenuItem.routeName);
            },
          ),
        ],
      ),
      drawer: AppDrawer(),
      body: Padding(
        padding: EdgeInsets.all(8),
        child: ListView.builder(
          itemCount: menusData.items.length,
          itemBuilder: (_, i) => Column(
            children: [
              UserMenuItem(menusData.items[i]),
              Divider(),
            ],
          ),
        ),
      ),
    );
  }
}