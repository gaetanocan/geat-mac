class GreatMac {
    constructor() {
      this.macData = {};
    }
  
    setMacData(key, value) {
      this.macData[key] = value;
      console.log(`Set Great Mac data for key '${key}'+`, value);
    }
  
    getMacData(key) {
      const value = this.macData[key];
      console.log(`Retrieved Great Mac data for key '${key}':`, value);
      return value;
    }
  }
  
  // Example usage:
  const greatMac = new GreatMac();
  
  greatMac.setMacData('size', 'Large');
  greatMac.setMacData('flavor', 'Cheese Explosion');
  greatMac.setMacData('rating', 4.8);
  
  const retrievedSize = greatMac.getMacData('size');
  const retrievedFlavor = greatMac.getMacData('flavor');
  const retrievedRating = greatMac.getMacData('rating');
  const retrievedUnknown = greatMac.getMacData('unknownKey');
  
  console.log('Retrieved Great Mac data for unknownKey:', retrievedUnknown);
  