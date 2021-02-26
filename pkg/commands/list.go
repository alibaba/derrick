package commands

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/alibaba/derrick/pkg/rigging"
)

type listOption struct {
	ProjectPath string
}

func NewListCommand() *cobra.Command {
	o := &listOption{}

	cmd := &cobra.Command{
		Use:     "list",
		Short:   "List all available riggings to inspect the applications",
		Example: `derrick list`,
		RunE: func(cmd *cobra.Command, args []string) error {
			return o.Run()
		},
	}

	cmd.Flags().StringVarP(&o.ProjectPath, "path", "p", "", "Path of a project which is about to be detected")
	return cmd
}

func (o *listOption) Run() error {
	rl := rigging.GetAll()
	fmt.Println("Available riggings:")
	for _, r := range rl {
		fmt.Printf("\t%s\n", r.Name())
	}
	return nil
}
