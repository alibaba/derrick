package main

import (
	"embed"
	"fmt"
	"os"

	"github.com/alibaba/derrick/pkg/commands"
	"github.com/alibaba/derrick/pkg/common"
	"github.com/alibaba/derrick/pkg/core"
)

//go:embed static/rigging
var templateFS embed.FS

func main() {
	if err := load(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	command := commands.New(templateFS)
	if err := command.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func preLoad() error {
	fmt.Print(common.DerrickLogo)
	if err := common.InitDirs(); err != nil {
		return fmt.Errorf("failed to init Derrick home, err: %s", err)
	}
	return nil
}

func load() error {
	firstTimeFlag, _ := common.CheckDerrickFirstSetup()
	if firstTimeFlag {
		if err := preLoad(); err != nil {
			return err
		}
	}

	core.LoadRiggings()
	return nil
}
