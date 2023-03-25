import SfmcHelper from "../src";

// just importing env variables - you can skip this part
import dotenv from "dotenv";
dotenv.config();

const config = {
  authEndpoint: process.env.AUTH_ENDPOINT || "",
  clientId: process.env.CLIENT_ID || "",
  clientSecret: process.env.CLIENT_SECRET || "",
  restEndpoint: process.env.REST_ENDPOINT || "",
  businessUnitId: process.env.BUSINESS_UNIT_ID,
};

const someFunction = async () => {
  
  const sfmc = SfmcHelper(config);
  
  const result = await sfmc
    .dataExtension("SendLogExpansionPack")
    .get()
    .where("EmailAddress", "eq", "victor.shapochkin@avast.com")
  console.log(result);
};

someFunction();
