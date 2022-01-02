import 'package:admin_restaurant/providers/food.dart';
import 'package:admin_restaurant/providers/foods.dart';
import 'package:admin_restaurant/providers/menu.dart';
import 'package:admin_restaurant/providers/menus.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AddMenuItem extends StatefulWidget {

  static const routeName = '/addMenuItem';

  @override
  _AddMenuItemState createState() => _AddMenuItemState();

}

class _AddMenuItemState extends State<AddMenuItem> {

  late String xyz;
  late Menus menus;


  late Menu menu;

  final _keyForm = GlobalKey<FormState>();

  final itemNameController = TextEditingController();
  final itemDescriptionController = TextEditingController();
  final itemPriceController = TextEditingController();
  final itemUrlController = TextEditingController();

  void saveItemToList(){

    print('saveItemToList ${itemNameController.text}');

    if(_keyForm.currentState!.validate()){
      Menu menu =  Menu(
        title: itemNameController.text,
        description: itemDescriptionController.text,
        imageUrl:itemUrlController.text, id: '', foods: [],
      );
      menus.addMenu(menu);

      itemNameController.text = '';
      itemDescriptionController.text = '';
      itemUrlController.text = '';

      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Successfully Saved Menu')));

    }
    /**/
  }

  @override
  Widget build(BuildContext context) {

    menus = Provider.of<Menus>(context);

    return Scaffold(
      appBar: AppBar(title: const Text('Add Menu'),),
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
                    return 'Please enter Menu name';
                  }else{
                    return null;
                  }
                },
                decoration: const InputDecoration(
                  hintText: 'Enter Menu Name',
                  hintStyle: TextStyle(
                    fontSize: 18,
                    //color: Colors.yellow
                  ),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(15.0))
                  )
                ),
              ),
              const SizedBox(height: 10,),
              TextFormField(
                controller: itemDescriptionController,
                keyboardType: TextInputType.text,
                textInputAction: TextInputAction.next,
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter Menu description';
                  }else{
                    return null;
                  }
                },
                decoration: const InputDecoration(
                    hintText: 'Enter Menu Description',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              const SizedBox(height: 10,),
              TextFormField(
                controller: itemUrlController,
                keyboardType: TextInputType.text,
                textInputAction: TextInputAction.done,
                validator: (value){
                  if(value == null || value.isEmpty){
                    return 'Please enter Menu url image';
                  }else{
                    return null;
                  }
                },
                decoration: const InputDecoration(
                    hintText: 'Enter Menu URL image',
                    hintStyle: TextStyle(
                      fontSize: 18,
                      //color: Colors.yellow
                    ),
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(15.0))
                    )
                ),
              ),
              const SizedBox(height: 10,),
              ElevatedButton(
                  onPressed: (){saveItemToList();},
                  child: Text('Save'))
            ],
          ),
        ),
      ),
    );
  }
}
