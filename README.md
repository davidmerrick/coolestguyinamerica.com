Source code for https://www.coolestguyinamerica.com.

Fun fact: I'm the first search result on Google for ["coolest guy in America"](https://www.google.com/search?q=coolest+guy+in+america) 🙂.

# Cloudformation-ing

To create the AWS resources from the template, do the following.

Package the templates:
`aws cloudformation package --template-file etc/root.yaml --output-template packaged.yaml --s3-bucket merrick-cf-templates-east`

Deploy the templates:
`aws cloudformation deploy --template-file packaged.yaml --stack-name coolestguyinoregon`

# Gotchas
- Lambda@Edge doesn't allow env vars, so gotta hardcode that domain name.
- Lambda@Edge has a 5-second limit on timeouts.
