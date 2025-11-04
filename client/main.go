package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	serverHost := os.Getenv("SERVER_HOST")
	ticker := time.NewTicker(5 * time.Second)
	for ; true; <-ticker.C {
		fmt.Printf("triggering requests targeting %s\n", serverHost)

		// generate traffic on client
		go doReq(fmt.Sprintf("http://%s:8080/", serverHost))
		go doReq(fmt.Sprintf("http://%s:8080/trigger-error", serverHost))

	}
}

func doReq(url string) {
	_, err := http.Get(url)
	if err != nil {
		fmt.Printf("error while making request: %v\n", err)
	}
}
