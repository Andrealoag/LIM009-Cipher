describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "efghijklmnopqrstuvwxyzabcd" para "abcdefghijklmnopqrstuvwxyz" con offset 30',() => {
      assert.equal(cipher.encode(30,"abcdefghijklmnopqrstuvwxyz"),"efghijklmnopqrstuvwxyzabcd");
    });

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "456" para "123" con offset 33',() => {
      assert.equal(cipher.encode(33,"123"),"456");
    });
    
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "ðò" para "ñÑ" con offset 33',() => {
      assert.equal(cipher.encode(33,"ñÑ"),"ðò");
    });



  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "efghijklmnopqrstuvwxyzabcd" con offset 30',() => {
      assert.equal(cipher.decode(30,"efghijklmnopqrstuvwxyzabcd"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "123" para "456" con offset 33',() => {
      assert.equal(cipher.decode(33,"456"),"123");
    });
    
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "ñÑ" para "ðò" con offset 33',() => {
      assert.equal(cipher.decode(33,"ðò"),"ñÑ");
    });


})
})
