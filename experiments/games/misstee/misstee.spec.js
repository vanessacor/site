'use strict';

describe('Cat', function () {
  describe('when I create Cat', function () {
    beforeEach(function () {
      this.cat = new Cat(30, 30, '#9e7c65');
    });

    it('should contain the correct height', function () {
      expect(this.cat.height).toEqual(30);
    });

    it('should contain the correct width', function () {
      expect(this.cat.width).toEqual(30);
    });

    it('should contain the correct color', function () {
      expect(this.cat.color).toEqual('#9e7c65');
    });
  });
});

// (describe) when I draw misstee
// (beforeEach)
// this.misstee = new misstee()

// (it) should contains all the attributes
// expect(this.misstee.hight).toEqual('foobar')
// (describe) when I draw misstee
