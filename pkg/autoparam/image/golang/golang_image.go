package golang

import (
	"os/exec"
	"regexp"
	"strings"

	"github.com/alibaba/derrick/pkg/template"
)

const (
	GOLANG_1_15 = "1.15"

	DEFAULT_VERSION = GOLANG_1_15
)

type GolangVersionDetector struct {
}

func (detector GolangVersionDetector) Execute() (map[string]string, error) {
	cmd := exec.Command("bash", "-c", "go version")
	output, err := cmd.Output()
	if err != nil {
		return nil, err
	}
	re, err := regexp.Compile("go[[:digit:]].[[:digit:]]*")
	if err != nil {
		return nil, err
	}
	matched := re.Find(output)
	version := template.Version
	if matched == nil {
		return map[string]string{version: DEFAULT_VERSION}, nil
	}

	return map[string]string{version: strings.ReplaceAll(string(matched), "go", "")}, nil
}

func (detector GolangVersionDetector) Name() string {
	return "GolangVersionDetector"
}
