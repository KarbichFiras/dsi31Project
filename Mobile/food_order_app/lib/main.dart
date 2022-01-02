import 'package:flutter/material.dart';

import 'package:food_order_app/screens/login.dart';
import 'package:food_order_app/screens/register.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return 
      child: MaterialApp(
        title: 'chmin9lews',
        theme: ThemeData(
          primarySwatch: Colors.red,
          accentColor: Colors.orange,
          fontFamily: 'Lato',
        ),
        home: Login(),
        routes: {
          Login.routeName: (ctx) => Login(),
          Register.routeName: (ctx) => Register(),

        }
        ),
    );

  }
}
