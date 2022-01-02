import 'package:flutter/material.dart';

import 'package:food_order_app/screens/login.dart';
import 'package:food_order_app/screens/register.dart';

import 'package:provider/provider.dart';

import './providers/foods.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => Foods()),
      ],
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
            Register.routeName: (ctx) => Register()
          }),
    );
  }
}
