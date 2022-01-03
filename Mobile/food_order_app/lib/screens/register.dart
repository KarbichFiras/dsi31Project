import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class Register extends StatefulWidget {
  static const routeName = '/register';
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Registration'),
      ),
    );
  }
}
