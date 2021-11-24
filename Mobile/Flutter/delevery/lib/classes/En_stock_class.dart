class En_Stock{
  int _food_code
  int _rest_code
  int _qtt_en_stock
  En_Stock(this._food_code, this._rest_code,
      this._qtt_en_stock);

  int get qtt_en_stock => _qtt_en_stock;

  set qtt_en_stock(int value) {
    _qtt_en_stock = value;
  }

  int get rest_code => _rest_code;

  set rest_code(int value) {
    _rest_code = value;
  }

  int get food_code => _food_code;

  set food_code(int value) {
    _food_code = value;
  }

}