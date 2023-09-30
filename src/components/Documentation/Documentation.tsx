import Snippet from "./Snippet";

const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">excuse me</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">nen vastanu babu</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

excuse me
  # Write code here
nen vastanu babu

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">ipudu</code>.
      </>
    ),
    code: `excuse me
    ipudu a = 10;
    ipudu b = "two";
    ipudu c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
nen vastanu babu
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages.
        Although booleans are supported, they are not part of this demo.
      </>
    ),
    code: `excuse me
    ipudu a = 10;
    ipudu b = 10 + (15*20);
    ipudu c = "two";
nen vastanu babu
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">aa chupentra idi chudu</code> to print anything to
        console.
      </>
    ),
    code: `excuse me
    aa chupentra idi chudu("Hello World");
    ipudu a = 10;
    ipudu b = 20;
    aa chupentra idi chudu(a + b);
    aa chupentra idi chudu(5);
nen vastanu babu
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        brahmiLang supports if-else-if ladder construct , <code className="language-cpp">idi ok antaventra</code> block will execute if condition is <code className="language-cpp">true</code>, otherwise one of the subsequently added <code className="language-cpp">kaneesam idi</code> blocks will execute if their respective condition is <code className="language-cpp">true</code>, and the <code className="language-cpp">inka ide</code> block will eventually execute if all of the above conditions are <code className="language-cpp">false</code>.
      </>
    ),
    code: `excuse me
    ipudu a = 10;
    idi ok antaventra a < 20 {
      aa chupentra idi chudu("a is less than 20");
    } 
    kaneesam idi a < 25 {
      aa chupentra idi chudu("a is less than 25");
    } 
    inka ide {
      aa chupentra idi chudu("a is greater than or equal to 25");
    }
nen vastanu babu
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">nuv line lo undu</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">true</code>. If the condition becomes <code className="language-cpp">false</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">aapandroi</code> to break the loop and <code className="language-cpp">nannu involve cheyakandi</code> to continue within loop.
      </>
    ),
    code: `excuse me
    ipudu a = 0
    nuv line lo undu a < 10 {
      a += 1
      idi ok antaventra a == 5 {
        aa chupentra idi chudu(a);
        nannu involve cheyakandi
      }
      kaneesam idi a == 6 {
        aapandroi
      }
      aa chupentra idi chudu(a);
    }
    aa chupentra idi chudu("done");
nen vastanu babu
    `
  }

];

function Documentation() {

  return (
    <div className="m-20">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Documentation
      </h2>
      <p className="mt-4 text-gray-300">
        Bramhilang is dynamically typed toy programming language, based on 
        famous memes of Meme Legend Brahmanandam, written in Python.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="border-t border-gray-200 pt-4">
            <div className="font-medium text-gray-300">{feature.name}</div>
            <div className="mt-2 text-sm text-gray-200">
              {feature.description}
            </div>
            <Snippet code={feature.code} />
          </div>
        ))}
      </div>
      <footer>
        <div className="text-white text-sm text-center py-4">
          &copy; {new Date().getFullYear()}{" "}
          <a className="hover:text-green-600" href="https://github.com/rahul897">
            Rahul Iragavarapu
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Documentation;
