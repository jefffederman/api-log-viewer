module.exports = function(app) {
  var express = require('express');
  var requestsRouter = express.Router();
  var request = {
    id: 1,
    request_url: "/api.xro/2.0/CreditNotes?where=%28Status%3D%22AUTHORISED%22+OR+Status%3D%22PAID%22+OR+Status%3D%22VOID%22%29+AND+Type%3D%3D%22ACCRECCREDIT%22",
    request_method: "GET",
    request_headers: '{"charset":"utf-8", "If-Modified-Since":"2014-11-03T15:18:16"}',
    request_body: "",
    response_status: 200,
    response_headers: '{"cache-control":["private"], "content-type":["text/xml; charset=utf-8"], "vary":["Accept-Encoding"], "www-authenticate":["OAuth Realm=\"api-partner.network.xero.com\""], "x-s":["445761-O1VMAP04"], "strict-transport-security":["max-age=31536000"], "date":["Mon, 10 Nov 2014 15:19:50 GMT"], "connection":["close"], "content-length":["1691"]}',
    response_body: "<Response xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\r\n  <Id>d749e455-e9fd-47d6-8bab-bfe38d8ac27a</Id>\r\n  <Status>OK</Status>\r\n  <ProviderName>Funding Gates</ProviderName>\r\n  <DateTimeUTC>2014-11-10T15:19:51.4710389Z</DateTimeUTC>\r\n  <CreditNotes>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>68f77ee2-e4ce-4afe-89e5-2cae62b5d8fa</ContactID>\r\n        <Name>Dallas Flooring Shop</Name>\r\n      </Contact>\r\n      <Date>2014-11-07T00:00:00</Date>\r\n      <Status>AUTHORISED</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-08T00:25:26.747</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>e4d6e42e-7447-4187-b7ba-3d96e319d457</CreditNoteID>\r\n      <CreditNoteNumber>CN-0271</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>25.00</RemainingCredit>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>eaa94709-ae02-461a-8675-d57d86580a9b</ContactID>\r\n        <Name>West Coast Security</Name>\r\n      </Contact>\r\n      <Date>2014-11-07T00:00:00</Date>\r\n      <Status>AUTHORISED</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-08T00:31:50.28</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>07c48e95-1748-46fb-9439-60482bebfbf9</CreditNoteID>\r\n      <CreditNoteNumber>CN-0273</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>25.00</RemainingCredit>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>2b06557f-86d5-4d10-8c28-26e273737668</ContactID>\r\n        <Name>Allen Drywall</Name>\r\n      </Contact>\r\n      <Date>2014-11-09T00:00:00</Date>\r\n      <Status>AUTHORISED</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-09T20:17:22.79</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>c9813367-89b4-4e1e-9acf-61737635e2fd</CreditNoteID>\r\n      <CreditNoteNumber>CN-0277</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>25.00</RemainingCredit>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>5ec8f7c5-b8a0-484a-afa4-4546c190afc1</ContactID>\r\n        <Name>Addamore Appraisers</Name>\r\n      </Contact>\r\n      <Date>2014-11-05T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>77.65</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>77.65</Total>\r\n      <UpdatedDateUTC>2014-11-06T00:52:50.563</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-05T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <Reference>inv 0029</Reference>\r\n      <CreditNoteID>6078929c-2efe-42c0-8007-2ed4d9d340a3</CreditNoteID>\r\n      <CreditNoteNumber>CN-0262</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Allocations>\r\n        <Allocation>\r\n          <AppliedAmount>77.65</AppliedAmount>\r\n          <Date>2014-11-05T00:00:00</Date>\r\n          <Invoice>\r\n            <InvoiceID>8afea216-03db-49af-acae-dd42d2eed678</InvoiceID>\r\n            <InvoiceNumber>INV-0029</InvoiceNumber>\r\n          </Invoice>\r\n        </Allocation>\r\n      </Allocations>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>7b6d0690-2345-4dc7-b4db-c4148c35106a</ContactID>\r\n        <Name>KLS Planning &amp; Design</Name>\r\n      </Contact>\r\n      <Date>2014-11-06T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-09T19:13:08.51</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-09T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>9ee76285-0208-45cd-a02b-8664bb882a7b</CreditNoteID>\r\n      <CreditNoteNumber>CN-0266</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Allocations>\r\n        <Allocation>\r\n          <AppliedAmount>25.00</AppliedAmount>\r\n          <Date>2014-11-09T00:00:00</Date>\r\n          <Invoice>\r\n            <InvoiceID>f1883f2d-371c-4a5f-a26d-05d49f1614e4</InvoiceID>\r\n            <InvoiceNumber>INV-0274</InvoiceNumber>\r\n          </Invoice>\r\n        </Allocation>\r\n      </Allocations>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>843aaef3-e25b-4d74-8116-1d7eab686ef7</ContactID>\r\n        <Name>Datamaxx USA Corporation</Name>\r\n      </Contact>\r\n      <Date>2014-11-06T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>Exclusive</LineAmountTypes>\r\n      <SubTotal>100.00</SubTotal>\r\n      <TotalTax>6.25</TotalTax>\r\n      <Total>106.25</Total>\r\n      <UpdatedDateUTC>2014-11-06T21:58:10.013</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-06T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <Reference>inv 1</Reference>\r\n      <CreditNoteID>3ca88a0a-b3e4-4206-ba3e-0485db29eeb4</CreditNoteID>\r\n      <CreditNoteNumber>CN-0267</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Allocations>\r\n        <Allocation>\r\n          <AppliedAmount>106.25</AppliedAmount>\r\n          <Date>2014-11-06T00:00:00</Date>\r\n          <Invoice>\r\n            <InvoiceID>68c488a6-f01d-4e35-9d24-fdec9e635e25</InvoiceID>\r\n            <InvoiceNumber>INV-0001</InvoiceNumber>\r\n          </Invoice>\r\n        </Allocation>\r\n      </Allocations>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>8446532e-2a72-4631-98b0-6bb51f488f14</ContactID>\r\n        <Name>ClenaCorp</Name>\r\n      </Contact>\r\n      <Date>2014-11-06T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-06T22:00:55.47</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-06T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>7eebe0b4-e31d-42d8-857a-78b85539c9f2</CreditNoteID>\r\n      <CreditNoteNumber>CN-0268</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Allocations>\r\n        <Allocation>\r\n          <AppliedAmount>25.00</AppliedAmount>\r\n          <Date>2014-11-06T00:00:00</Date>\r\n          <Invoice>\r\n            <InvoiceID>078be8b5-3b3e-4547-b2ba-553aa2191dd9</InvoiceID>\r\n            <InvoiceNumber>INV-0137</InvoiceNumber>\r\n          </Invoice>\r\n        </Allocation>\r\n      </Allocations>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>2608c6ad-2eac-454e-8f06-9960ecba57d8</ContactID>\r\n        <Name>Rover.com</Name>\r\n      </Contact>\r\n      <Date>2014-11-07T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>100.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>100.00</Total>\r\n      <UpdatedDateUTC>2014-11-08T00:24:20.57</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-07T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>6e381cb4-0005-49b7-807f-1dea6a0057d9</CreditNoteID>\r\n      <CreditNoteNumber>CN-0270</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Allocations>\r\n        <Allocation>\r\n          <AppliedAmount>100.00</AppliedAmount>\r\n          <Date>2014-11-07T00:00:00</Date>\r\n          <Invoice>\r\n            <InvoiceID>f306e72b-1f13-46c9-9d1a-f2b08c14ca43</InvoiceID>\r\n            <InvoiceNumber>INV-0158</InvoiceNumber>\r\n          </Invoice>\r\n        </Allocation>\r\n      </Allocations>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n    <CreditNote>\r\n      <Contact>\r\n        <ContactID>1b784715-df9c-4800-9764-d2c0677dc673</ContactID>\r\n        <Name>Mill Valley Photo Shop</Name>\r\n      </Contact>\r\n      <Date>2014-11-09T00:00:00</Date>\r\n      <Status>PAID</Status>\r\n      <LineAmountTypes>NoTax</LineAmountTypes>\r\n      <SubTotal>25.00</SubTotal>\r\n      <TotalTax>0.00</TotalTax>\r\n      <Total>25.00</Total>\r\n      <UpdatedDateUTC>2014-11-09T20:11:16.42</UpdatedDateUTC>\r\n      <CurrencyCode>USD</CurrencyCode>\r\n      <FullyPaidOnDate>2014-11-09T00:00:00</FullyPaidOnDate>\r\n      <Type>ACCRECCREDIT</Type>\r\n      <CreditNoteID>48b38706-13a8-4e7d-8b1a-77a752e466ff</CreditNoteID>\r\n      <CreditNoteNumber>CN-0275</CreditNoteNumber>\r\n      <CurrencyRate>1.000000</CurrencyRate>\r\n      <RemainingCredit>0.00</RemainingCredit>\r\n      <Payments>\r\n        <Payment>\r\n          <PaymentID>9bbd1c05-7066-4765-a309-c0d45f12147f</PaymentID>\r\n          <Date>2014-11-09T00:00:00</Date>\r\n          <Amount>25.00</Amount>\r\n          <CurrencyRate>1.000000</CurrencyRate>\r\n        </Payment>\r\n      </Payments>\r\n      <HasAttachments>false</HasAttachments>\r\n    </CreditNote>\r\n  </CreditNotes>\r\n</Response>",
    occurred_at: new Date()
  }
  requestsRouter.get('/:request_id', function(req, res) {
    var request_id = req.params.request_id;
    request.id = request_id;
    res.send({"request": request});
  });
  app.use('/api/requests/', requestsRouter);
};