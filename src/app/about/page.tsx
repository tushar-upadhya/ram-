import Hero from "@/components/hero/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { infoData, KrishnaNames, skillData } from "@/lib/about";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0F0D0E] text-[#F9F4DA] flex flex-col items-center justify-center">
      <Hero
        title="Who we are?"
        description="Octanics software provides intelligent software solutions and technology to help entrepreneurs and business owners start and expand their ventures."
        buttonText="Book a Demo"
      />

      <div className="mt-12 w-full max-w-5xl px-4">
        <Tabs defaultValue="personal">
          <TabsList className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 xl:grid-cols-3 xl:max-w-[520px] mx-auto">
            <TabsTrigger
              className="w-full xl:w-auto py-2 px-4 text-center"
              value="personal"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              className="w-full xl:w-auto py-2 px-4 text-center"
              value="skills"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="w-full xl:w-auto py-2 px-4 text-center"
              value="KrishnaNames"
            >
              Krishna Names
            </TabsTrigger>
          </TabsList>

          <div className="mt-12 text-lg xl:mt-8">
            {/* personal */}
            <TabsContent value="personal">
              <div className="text-center xl:text-left">
                <h3 className="mb-4 text-2xl font-semibold">
                  Vasudeva Krishna / Devaki’s ke lal
                </h3>
                <p className="max-w-xl mx-auto text-lg mb-8 xl:mx-0 xl:text-base">
                  I specialize in Compassion, Tenderness, and Love
                </p>
                {/* icons */}
                <div className="grid gap-4 mb-12 xl:grid-cols-2 xl:gap-8">
                  {infoData.map((item, index) => (
                    <div
                      className="flex items-center justify-center xl:justify-start gap-x-4 xl:gap-x-6 xl:mx-0"
                      key={index}
                    >
                      {/* <div className="text-primary">{item.icon}</div> */}
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
              <div className="text-center xl:text-left">
                <div className="mb-16">
                  <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                  <div className="mb-4 border-b border-border"></div>
                  <div>
                    {skillData
                      .find((category) => category.title === "skills")
                      ?.data.map((item, index) => {
                        // const { name, des } = item;
                        return (
                          <div
                            className="mx-auto text-center w-3/4 xl:text-left xl:mx-0 xl:w-2/5 mb-6"
                            key={index}
                          >
                            {/* <div className="font-medium text-primary">
                              {item.name}:
                            </div> */}
                            {/* <div className="font-medium">{item.des}</div> */}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Krishna Names */}
            <TabsContent value="KrishnaNames">
              <div className="text-center xl:text-left">
                <div className="mb-16">
                  <h4 className="mb-2 text-xl font-semibold">Krishna Names</h4>
                  <div className="mb-4 border-b border-border"></div>
                  <div>
                    {KrishnaNames.map((item, index) => {
                      const { name, description } = item;
                      return (
                        <div
                          className="mx-auto text-center w-3/4 xl:text-left xl:mx-0 xl:w-2/5 mb-6"
                          key={index}
                        >
                          <div className="font-medium text-primary">
                            {name}:
                          </div>
                          <div className="font-medium">{description}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutPage;
