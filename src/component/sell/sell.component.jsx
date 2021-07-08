import React from "react";
import * as S from "./sell.style";
import { Formik, Form, Field } from "formik";
import { initialValues, validationSchema } from "./sell.form";

export const Sell = () => {
  const onSubmit = values => {
    console.log(values)
  }

  
  return (
    <S.StyledSell>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <S.StyledForm>
            <S.StyledTitle>Sell an object</S.StyledTitle>
            <S.StyledSectionTitle>Object details</S.StyledSectionTitle>
            <Field
              name="firstName"
              id="firstName"
            >
              {({ field, meta }) => (
                <div>
                  <S.StyledLabel>Auction Title</S.StyledLabel>
                  <S.StyledInput type="text" placeholder="Ex.: A big white bicycle with 2 rims" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </div>
              )}
            </Field>
            <Field
              name="lastName"
              id="lastName"
            >
              {({ field, meta }) => (
                <div>
                  <S.StyledLabel>Images</S.StyledLabel>
                  <S.StyledInput type="text" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </div>
              )}
            </Field>
            <Field
              name="description"
              id="description"
            >
              {({ field, meta }) => (
                <div>
                  <S.StyledLabel>Description</S.StyledLabel>
                  <S.StyledTextArea {...field} placeholder="Try to write something that you wish you will find if you read this"></S.StyledTextArea>
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </div>
              )}
            </Field>
            <Field
              name="startingPrice"
              id="startingPrice"
            >
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Starting Price</S.StyledLabel>
                  <S.StyledInputPrice {...field} type="text" />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field
              name="currency"
              id="currency"
            >
              {({ field, meta }) => (
                <>
                  <S.StyledSelect {...field}>
                   <S.StyledOption value="lei">LEI</S.StyledOption>
                   <S.StyledOption value="gbp">GBP</S.StyledOption>
                  </S.StyledSelect>
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <S.StyledFormSeparator />
            <S.StyledSectionTitle>Contact info</S.StyledSectionTitle>
            <Field
              name="city"
              id="city"
            >
              {({ field, meta }) => (
                <div>
                  <S.StyledLabel>Your city</S.StyledLabel>
                  <S.StyledInput type="text" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </div>
              )}
            </Field>
            <S.StyledFormSeparator />
            <button type="submit" disabled={!isValid}>Show me the ££££</button>
          </S.StyledForm>
        )}
      </Formik>
    </S.StyledSell>
  )
}

// export const Sell = () => {
//   return (
//     <Formik
//       intialValues={{
//         auctionTitle: "",
//         // images: [],
//         description: "",
//       }}
//       onSubmit={(values) => console.log(values)}
//     >
//       {() => (
//         <S.StyledForm>
//           <S.StyledSell>
//             <S.StyledTitle>Sell an object</S.StyledTitle>
//             <S.StyledSectionTitle>Object details</S.StyledSectionTitle>
//             <S.StyledLabel>Auction Title</S.StyledLabel>
//             <S.StyledInput
//               type="text"
//               placeholder="Ex.: A big white bicycle with 2 rims"
//             />
//             <Field
//               name="auctionTitle"
//               id="auctionTitle"
//               label="auctionTitle"
//               component={S.StyledInput}
//             />
//             <Field
//               name="description"
//               id="description"
//               label="description"
//               component={S.StyledInput}
//             />

//             <S.StyledLabel>Images</S.StyledLabel>
//             <S.StyledInput type="file" />

//             <S.StyledLabel>Description</S.StyledLabel>
//             <S.StyledTextArea placeholder="Try to write something that you wish you will find if you read this"></S.StyledTextArea>

//             <S.StyledLabel>Starting Price</S.StyledLabel>
//             <S.StyledInputPrice type="text" />

            // <S.StyledSelect>
            //   <S.StyledOption value="lei">LEI</S.StyledOption>
            //   <S.StyledOption value="gbp">GBP</S.StyledOption>
            // </S.StyledSelect>

//             <S.StyledFormSeparator />
            // <S.StyledSectionTitle>Contact info</S.StyledSectionTitle>
            // <S.StyledLabel>Your city</S.StyledLabel>
//             <S.StyledInput type="text" />
//             <S.StyledLabel>E-mail address</S.StyledLabel>
//             <S.StyledInput type="mail" />
//             <S.StyledLabel>Phone number</S.StyledLabel>
//             <S.StyledInput type="tel" />
//             <S.StyledFormSeparator />
//             <S.StyledSubmitButton type="submit" value="Place Auction" />
//           </S.StyledSell>
//         </S.StyledForm>
//       )}
//     </Formik>
//   );
// };
