const webpush = require('web-push');

const publicVapidKey = 'BLcrhfjG9u_Z_7L9xwHAe4wQRRelqgM_zDwPGtQX1qJrqI_vbbd5X77BBdevJ2zcGwrkdfsJB8oK7wyO7MZfWxk';
const privateVapidKey = '2dfU1oFT3RNtuVTB9pa8C_NzMeAb2567PFa0OJMt67E';


webpush.setVapidDetails(
    'mailto:zawadzielex@gmail.com',
    publicVapidKey,
    privateVapidKey,
);
