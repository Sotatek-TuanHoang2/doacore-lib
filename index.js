'use strict';

var doacore = module.exports;

// module information
doacore.version = 'v' + require('./package.json').version;
doacore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of doacore-lib found. ' +
      'Please make sure to require doacore-lib and check that submodules do' +
      ' not also include their own doacore-lib dependency.';
    throw new Error(message);
  }
};
doacore.versionGuard(global._doacore);
global._doacore = doacore.version;

// crypto
doacore.crypto = {};
doacore.crypto.BN = require('./lib/crypto/bn');
doacore.crypto.ECDSA = require('./lib/crypto/ecdsa');
doacore.crypto.Hash = require('./lib/crypto/hash');
doacore.crypto.Random = require('./lib/crypto/random');
doacore.crypto.Point = require('./lib/crypto/point');
doacore.crypto.Signature = require('./lib/crypto/signature');

// encoding
doacore.encoding = {};
doacore.encoding.Base58 = require('./lib/encoding/base58');
doacore.encoding.Base58Check = require('./lib/encoding/base58check');
doacore.encoding.BufferReader = require('./lib/encoding/bufferreader');
doacore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
doacore.encoding.Varint = require('./lib/encoding/varint');

// utilities
doacore.util = {};
doacore.util.buffer = require('./lib/util/buffer');
doacore.util.js = require('./lib/util/js');
doacore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
doacore.errors = require('./lib/errors');

// main bitcoin library
doacore.Address = require('./lib/address');
doacore.Block = require('./lib/block');
doacore.MerkleBlock = require('./lib/block/merkleblock');
doacore.BlockHeader = require('./lib/block/blockheader');
doacore.HDPrivateKey = require('./lib/hdprivatekey.js');
doacore.HDPublicKey = require('./lib/hdpublickey.js');
doacore.Networks = require('./lib/networks');
doacore.Opcode = require('./lib/opcode');
doacore.PrivateKey = require('./lib/privatekey');
doacore.PublicKey = require('./lib/publickey');
doacore.Script = require('./lib/script');
doacore.Transaction = require('./lib/transaction');
doacore.URI = require('./lib/uri');
doacore.Unit = require('./lib/unit');

// dependencies, subject to change
doacore.deps = {};
doacore.deps.bnjs = require('bn.js');
doacore.deps.bs58 = require('bs58');
doacore.deps.Buffer = Buffer;
doacore.deps.elliptic = require('elliptic');
doacore.deps.scryptsy = require('scryptsy');
doacore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
doacore.Transaction.sighash = require('./lib/transaction/sighash');
