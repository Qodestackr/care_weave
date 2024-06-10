export default function PolicyPage() {
  return (

    <>
      <div className="policy-page container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Telemedicine Policy</h1>
        <div className="policy-sections grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="policy-section bg-gray-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
              CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
              TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
              SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </section>
          <section className="policy-section bg-teal-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              This site uses JSON Web Tokens and an in-memory database which resets
              every ~2 hours.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Data provided to this site is exclusively used to support signing in
              and is not passed to any third party services, other than via SMTP or
              OAuth for the purposes of authentication.
            </p>
          </section>
        </div>
      </div></>
  );
}
