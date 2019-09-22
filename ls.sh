#!/bin/sh

target_path="src/resources"
apikey="787847642e3b9c47c773921261d490e8"

base_url="https://localize.to/api/v1"
declare -a langs=("en" "ru")

for lang in  "${langs[@]}"
do
    echo $lang
    name="${target_path}/${lang}.json"
    request="${base_url}/language/${lang}?apikey=${apikey}"
#    echo $name $request
    curl -o ${name} ${request}
done

