'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    } else {
      this.temperature += 1;
    };
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1;
    };
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  };

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  };

  isMaximumTemperature() {
    if (this.powerSavingMode === true) {
      return this.temperature === 25;
    } else {
      return this.temperature === 32;
    };
  };
};