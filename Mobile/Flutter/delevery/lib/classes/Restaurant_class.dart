class Restaurant{
  int _code_rest
  string _name
  string _adress
  string _email
  Restaurant(this._code_rest, this._name, this._adress,
      this._email);

  string get email => _email;

  set email(string value) {
    _email = value;
  }

  string get adress => _adress;

  set adress(string value) {
    _adress = value;
  }

  string get name => _name;

  set name(string value) {
    _name = value;
  }

  int get code_rest => _code_rest;

  set code_rest(int value) {
    _code_rest = value;
  }


}