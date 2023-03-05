package krishnadubagunta

import (
	"fmt"
	"net/http"
)


func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, r)
}
