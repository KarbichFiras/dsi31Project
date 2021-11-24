class Images{
  string _code
  string _menu_Image
  string _cover_Image
  string _profil_Image
  string _rest_image
  int _code
  Images(this._code, this._menu_Image, this._cover_Image,
      this._profil_Image, this._rest_image);

  string get rest_image => _rest_image;

  set rest_image(string value) {
    _rest_image = value;
  }

  string get profil_Image => _profil_Image;

  set profil_Image(string value) {
    _profil_Image = value;
  }

  string get cover_Image => _cover_Image;

  set cover_Image(string value) {
    _cover_Image = value;
  }

  string get menu_Image => _menu_Image;

  set menu_Image(string value) {
    _menu_Image = value;
  }

  string get code => _code;

  set code(string value) {
    _code = value;
  }


}