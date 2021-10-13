import React, { useRef, useState } from "react";
import * as S from "./sell.style";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./sell.form";
import { db, ts, storageRef, storage } from "../../config/firebase";

export const Sell = () => {
  const [image, setImage] = useState(null);
  const preview = useRef();
  // const imageName = useRef();

  const onSubmit = (values, { resetForm }) => {
    values.startDate = new Date().getTime();
    values.startDateTS = ts;
    values.auctionImagePath = image.name;
    values.currentPrice = values.startingPrice;
    db.collection("auctions").add(values);
    resetForm();

    uploadImage();
  };

  let uploadImage = () => {
    storage.ref(`images/${image.name}`).put(image);
  };

  let oFunctie = (event) => {
    // console.log(event.target.files[0].name);
    preview.current.src = URL.createObjectURL(event.target.files[0]);
    // imageName.current.src = event.target.files[0].name;
    // console.log(preview.current.src);
    // setImage(preview.current.src);
    setImage(event.target.files[0]);
    // let auctionImageRef = storageRef.child(`${preview.current.src}`);
    // let auctionImagePath = storageRef.child(`images/${preview.current.src}`);
  };

  return (
    <S.StyledSell>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ isValid }) => (
          <S.StyledForm>
            <S.StyledTitle>Sell an object</S.StyledTitle>
            <S.StyledSectionTitle>Object details</S.StyledSectionTitle>
            <Field name="title" id="title">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Auction Title</S.StyledLabel>
                  <S.StyledInput
                    type="text"
                    placeholder="Ex.: A big white bicycle with 2 rims"
                    {...field}
                  />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="images" id="images">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Images</S.StyledLabel>
                  <S.StyledImagePreview ref={preview} alt="" />
                  <S.StyledLabelFile>
                    <S.StyledInputFile
                      type="file"
                      {...field}
                      onChange={oFunctie}
                    />
                    Add image
                  </S.StyledLabelFile>
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="description" id="description">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Description</S.StyledLabel>
                  <S.StyledTextArea
                    {...field}
                    placeholder="Try to write something that you wish you will find if you read this"
                  ></S.StyledTextArea>
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="startingPrice" id="startingPrice">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Starting Price</S.StyledLabel>
                  <S.StyledInputPrice {...field} type="text" />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="currency" id="currency">
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
            <Field name="city" id="city">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Your city</S.StyledLabel>
                  <S.StyledInput type="text" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="email" id="email">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>E-mail address</S.StyledLabel>
                  <S.StyledInput type="mail" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            <Field name="phone" id="phone">
              {({ field, meta }) => (
                <>
                  <S.StyledLabel>Phone number</S.StyledLabel>
                  <S.StyledInput type="tel" {...field} />
                  {meta.touched && meta.error && <div>error: {meta.error}</div>}
                </>
              )}
            </Field>
            {isValid && <div>is valid e true</div>}
            <S.StyledFormSeparator />
            <S.StyledSubmitButton type="submit" disabled={!isValid}>
              Place auction
            </S.StyledSubmitButton>
          </S.StyledForm>
        )}
      </Formik>
    </S.StyledSell>
  );
};
