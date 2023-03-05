package krishnadubagunta

import (
	"context"
	"sync"
	driver "github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

var lock = &sync.Mutex{}

type Neo4JClient interface {
	client := 
}

var instance *Neo4JClient

func client() *Neo4JClient {
	lock.Lock()
	defer lock.Unlock()

	if instance == nil {
		instance = new(Neo4JClient)
	}
	return
}
