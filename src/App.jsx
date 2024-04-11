import React from "react";
import Button from "./components/utils/Button";
import Card from "./components/utils/Card";
import CollapseCard from "./components/utils/CollapseCard";
import InputField from "./components/utils/Inputfield";
import RegisterForm from "./components/forms/RegisterForm";

const App = () => {
  const clicked = () => {
    alert("Clicked");
  };

  return (
    <main className="px-10 py-4">
      <h1 className="font-medium text-xl text-gray-800 mb-4">Components</h1>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-y-2 w-[120px]">
          <h1 className="font-medium text-gray-800">Buttons</h1>
          <div className="flex flex-col gap-y-2 max-h-[300px] overflow-auto">
            <Button type="submit" variant="primary">
              submit
            </Button>
            <Button type="submit" variant="secondary">
              submit
            </Button>
            <Button type="submit" variant="success">
              submit
            </Button>
            <Button type="submit" variant="violet">
              submit
            </Button>
            <Button type="submit" variant="warning">
              submit
            </Button>
            <Button type="submit" variant="danger">
              submit
            </Button>
            <Button type="submit" variant="solid">
              submit
            </Button>
            <Button type="submit" variant="outlined">
              submit
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-[400px]">
          <h1 className="font-medium text-gray-800 mb-2">Cards</h1>
          <div className="flex flex-col gap-y-2 max-h-[300px] overflow-auto">
            <Card title={"Custom Card"} variant={"primary"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"secondary"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"success"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"violet"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"warning"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"danger"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"solid"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"outlined"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Card>
            <Card title={"Custom Card"} variant={"primary"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"primary"}>button</Button>
            </Card>
          </div>
        </div>
        <div className="flex flex-col w-[400px]">
          <h1 className="font-medium text-gray-800 mb-2">Collapse Cards</h1>
          <div className="flex flex-col gap-y-2 max-h-[300px] overflow-auto">
            <CollapseCard title={"Custom card with button"} variant={"primary"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"primary"}>button</Button>
            </CollapseCard>
            <CollapseCard
              title={"Custom card with button"}
              variant={"secondary"}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"secondary"}>button</Button>
            </CollapseCard>
            <CollapseCard title={"Custom card with button"} variant={"success"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"success"}>button</Button>
            </CollapseCard>
            <CollapseCard title={"Custom card with button"} variant={"violet"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"violet"}>button</Button>
            </CollapseCard>
            <CollapseCard title={"Custom card with button"} variant={"warning"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"warning"}>button</Button>
            </CollapseCard>
            <CollapseCard title={"Custom card with button"} variant={"danger"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"danger"}>button</Button>
            </CollapseCard>
            <CollapseCard title={"Custom card with button"} variant={"solid"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"solid"}>button</Button>
            </CollapseCard>
            <CollapseCard
              title={"Custom card with button"}
              variant={"outlined"}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Button variant={"outlined"}>button</Button>
            </CollapseCard>
          </div>
        </div>
        <div className="flex flex-col w-[400px]">
          <h1 className="font-medium text-gray-800 mb-2">Inputs</h1>
          <div className="flex flex-col gap-y-2 max-h-[300px] overflow-auto">
            <InputField placholder={"name"} variant={"primary"} />
            <InputField placholder={"name"} variant={"secondary"} />
            <InputField placholder={"name"} variant={"success"} />
            <InputField placholder={"name"} variant={"violet"} />
            <InputField placholder={"name"} variant={"warning"} />
            <InputField placholder={"name"} variant={"danger"} />
            <InputField placholder={"name"} variant={"solid"} />
            <InputField placholder={"name"} variant={"outlined"} />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="font-medium text-gray-800 mb-2">Forms</h1>
        <div className="flex flex-row gap-4 overflow-auto">
          <RegisterForm variant={"primary"} />
          <RegisterForm variant={"secondary"} />
          <RegisterForm variant={"success"} />
          <RegisterForm variant={"violet"} />
          <RegisterForm variant={"warning"} />
          <RegisterForm variant={"danger"} />
          <RegisterForm variant={"solid"} />
          <RegisterForm variant={"outlined"} />
        </div>
      </div>
      <div className="mt-12 mb-28">
        <h1 className="font-medium text-gray-800 mb-2">Custom Layouts</h1>
        <div className="flex flex-col gap-y-5">
          <Card variant={"violet"}>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="font-medium">Nav Logo</h1>
              <Button variant={"violet"}>Login</Button>
            </div>
          </Card>
          <Card variant={"violet"}>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-y-4 justify-start items-start">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, molestiae nostrum totam voluptas iusto vero, aliquam
                  ipsam facilis molestias aliquid nulla deserunt quaerat ab eos,
                  vel quae quibusdam accusamus beatae! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Accusamus facere ea
                  deserunt veritatis necessitatibus fugit iste earum quod enim.
                  Quisquam labore dolore similique quam quaerat quis mollitia
                  aliquam dolor exercitationem!
                </p>
                <Button variant={"violet"}>Get started</Button>
              </div>
              <CollapseCard variant={"violet"} title={"read more"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus facere ea deserunt veritatis necessitatibus fugit iste
                earum quod enim. Quisquam labore dolore similique quam quaerat
                quis mollitia aliquam dolor exercitationem!
              </CollapseCard>
            </div>
          </Card>
          <div className="flex -flex-row p-5 gap-4 overflow-auto">
            <Card variant={"violet"} className={"min-w-[300px]"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </Card>
            <Card variant={"violet"} className={"min-w-[300px]"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </Card>
            <Card variant={"violet"} className={"min-w-[300px]"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </Card>
            <Card variant={"violet"} className={"min-w-[300px]"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </Card>
            <Card variant={"violet"} className={"min-w-[300px]"}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </Card>
          </div>
          <div className="w-[500px]">
            <RegisterForm variant={"violet"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
