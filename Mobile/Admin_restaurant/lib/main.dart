
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return 
      child: MaterialApp(
          title: 'Image Loader',
          debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.red,
          accentColor: Colors.white,
          fontFamily: 'Lato',

          ),
          home: LoginPage(),
          
      ),
    );

  }
}
