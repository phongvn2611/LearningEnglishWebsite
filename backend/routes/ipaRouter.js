const ipaApi = require("express").Router();
const ipaController = require("../controllers/ipaController");
const { authentication } = require("../middlewares/authenticationMiddleware");
const { checkInstructor } = require("../middlewares/authorizationMiddleware");

ipaApi.get("/get-all-ipa", authentication, ipaController.getAllIPAs);
ipaApi.get("/get-ipa-by-id/:id", authentication, ipaController.getById);
ipaApi.post(
  "/post-ipa",
  authentication,
  checkInstructor,
  ipaController.postIPA
);
ipaApi.put("/put-ipa/:id", authentication, checkInstructor, ipaController.putIPA);
ipaApi.delete("/delete-ipa/:id", authentication, checkInstructor, ipaController.deleteById);
ipaApi.get(
  "/get-ipa-by-type/:type",
  authentication,
  ipaController.getIPAsByType
);
ipaApi.get("/get-ipa-relative", ipaController.getIPARelative);

module.exports = ipaApi;
