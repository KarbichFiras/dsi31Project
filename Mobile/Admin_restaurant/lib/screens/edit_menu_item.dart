import 'package:admin_restaurant/providers/food.dart';
import 'package:admin_restaurant/providers/foods.dart';
import 'package:admin_restaurant/providers/menu.dart';
import 'package:admin_restaurant/providers/menus.dart';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

class EditMenuItem extends StatefulWidget {

  static const routeName = '/editMenuItem';

  const EditMenuItem({Key? key}) : super(key: key);

  @override
  _EditMenuItemState createState() => _EditMenuItemState();

}

class _EditMenuItemState extends State<EditMenuItem> {

  late String xyz;
  late Menus menus;


  late Menu menu;

  final _keyForm = GlobalKey<FormState>();

  final itemNameController = TextEditingController();
  final itemDescriptionController = TextEditingController();
  final itemPriceController = TextEditingController();
  final itemUrlController = TextEditingController();
  ///
  ///
  ///
  ///
  /// ne9s kifeh nzid existant foods lil menu

  void updateItemToList(){

    // print('saveItemToList ${itemNameController.text}');

    if(_keyForm.currentState!.validate()){

      /*Food food =  Food(
        title: itemNameController.text,
        description: itemDescriptionController.text,
        price: double.parse(itemPriceController.text),
        imageUrl:itemUrlController.text,
      );*/

      menu.title = itemNameController.text;
      menu.description = itemDescriptionController.text;
      menu.imageUrl = itemUrlController.text;


      menus.updateMenu(menu);


      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Successfully Updated Menu')));

    }
    /**/
  }

  @override
  Widget build(BuildContext context) {

    menus = Provider.of<Menus>(context);

    menu = ModalRoute.of(context)!.settings.arguments as Menu;

    itemNameController.text = menu.title;
    itemDescriptionController.text = menu.description;
    itemUrlController.text = menu.imageUrl;

    return Scaffold(
      appBar: AppBar(title: const Text('Edit Item'),),
      body: Padding(
        padding: const EdgeInsets.only(left: 16.0,right: 16.0,top: 10,bottom: 10),
        child: Form(
          key: _keyForm,
          child: ListView(
            children: [
              TextFormField(
                controller: itemNameController,
                keyboardType: TextInputType.text,
                textInputAction: TextInputAction.next,
                onChanged: (v){xyz = v;},
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter item name';
                  }else{
                    return null;
                  }
                },
                decoration: const InputDecoration(
                    hintText: 'Enter Item Name',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              SizedBox(height: 10,),
              TextFormField(
                controller: itemDescriptionController,
                keyboardType: TextInputType.text,
                textInputAction: TextInputAction.next,
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter item description';
                  }else{
                    return null;
                  }
                },
                decoration: InputDecoration(
                    hintText: 'Enter Item Description',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              SizedBox(height: 10,),
              TextFormField(
                controller: itemPriceController,
                keyboardType: TextInputType.number,
                textInputAction: TextInputAction.next,
                //maxLength: 11,
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter item price';
                  }else{
                    /*if(value.length == 11){
                      return null;
                    }else{
                      return 'Please enter 11 digit mobile number';
                    }*/

                    return null;
                  }
                },
                decoration: InputDecoration(
                    hintText: 'Enter Item Price',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              SizedBox(height: 10,),
              TextFormField(
                controller: itemUrlController,
                keyboardType: TextInputType.text,
                textInputAction: TextInputAction.done,
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter item url';
                  }else{
                    return null;
                  }
                },
                decoration: InputDecoration(
                    hintText: 'Enter Item URL',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              SizedBox(height: 10,),
              ElevatedButton(
                  onPressed: (){updateItemToList();},
                  child: Text('Update'))
            ],
          ),
        ),
      ),
    );
  }
}
