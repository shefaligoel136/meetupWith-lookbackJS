"use strict";

module.exports = function (Meetup) {
  Meetup.status = function (cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log("Current hour is %d", currentHour);
    var response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = "We are open for business.";
    } else {
      response = "Sorry, we are closed. Open daily from 6am to 8pm.";
    }
    cb(null, response);
  };

  Meetup.types = function (cb) {
    let response;
    response = "All technical meetups";
    cb(null, response);
  };

  Meetup.remoteMethod("status", {
    http: {
      path: "/status",
      verb: "get",
    },
    returns: {
      arg: "status",
      type: "string",
    },
  });

  Meetup.remoteMethod("types", {
    http: {
      path: "/types",
      verb: "get",
    },
    returns: {
      arg: "types",
      type: "string",
    },
  });
};
