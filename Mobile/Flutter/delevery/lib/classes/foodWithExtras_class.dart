class foodWithExtras{

  int _eId;
  int _fId;

  foodWithExtras(this._eId, this._fId);

  int get fId => _fId;

  set fId(int value) {
    _fId = value;
  }

  int get eId => _eId;

  set eId(int value) {
    _eId = value;
  }


}