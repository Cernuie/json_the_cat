const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#etchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error when given an invalid breed, via callback', (done) => {
    fetchBreedDescription('Garfield', (err, desc) => {
      //we expect an error for this scenario
      const expectedErr = "Error, check your url and try again."
      assert.equal(err, expectedErr);
      //expect null for desc
      assert.equal(desc, null);

      done();
    })
  })
});
