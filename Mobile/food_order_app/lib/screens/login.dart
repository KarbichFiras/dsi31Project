import 'package:flushbar/flushbar.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Login extends StatefulWidget {
  static const routeName = '/login';
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final formKey = GlobalKey<FormState>();

  String _userName, _password;

  @override
  Widget build(BuildContext context) {
    //AuthProvider auth = Provider.of<AuthProvider>(context);

    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Login'),
        ),
        body: SingleChildScrollView(
          child: Container(
            padding: EdgeInsets.all(40.0),
            child: Form(
              key: formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(
                    height: 15.0,
                  ),
                  Text("Email"),
                  SizedBox(
                    height: 5.0,
                  ),
                  TextFormField(
                    autofocus: false,
                    validator: validateEmail,
                    onSaved: (value) => _userName = value,
                    decoration:
                        buildInputDecoration('Enter Email', Icons.email),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  Text("Password"),
                  SizedBox(
                    height: 5.0,
                  ),
                  TextFormField(
                    autofocus: false,
                    obscureText: true,
                    validator: (value) =>
                        value.isEmpty ? "Please enter password" : null,
                    onSaved: (value) => _password = value,
                    decoration:
                        buildInputDecoration('Enter Password', Icons.lock),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  longButtons('Login', doLogin),
                  SizedBox(
                    height: 8.0,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
