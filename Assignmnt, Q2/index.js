function getUrlParameterValue(url, parameter) {
  return new
    URL(url).searchParams.get(parameter);
}

console.log(
  getUrlParameterValue
    ("https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby", "utm_medium"
    )
);

console.log(
  getUrlParameterValue(
    "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby", "utm_campaign"
  )
);