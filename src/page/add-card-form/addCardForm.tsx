const AddCardForm = ({}) => {
  const Navigation = useNavigate();
  const { form, update, submit } = useAddCard();
  const { open, open_modal, close_modal } = useModal();

  const closeModal = (color: string) => {
    update.color(color);
    close_modal();
  };

  return (
    <ModalLayout>
      <Topbar onClick={() => Navigation(-1)}>
        <span>{"<"}</span>
        <span>카드추가</span>
      </Topbar>

      <CardBox>
        <StyledCard color={form.color} onClick={open_modal} />
      </CardBox>

      <FormBox>
        <label>카드 번호</label>
        <InputBox>
          <input
            name="cardNum"
            maxLength={16}
            value={form.cardNum}
            onChange={update.filed}
          />
        </InputBox>

        <label>만료일</label>
        <InputBox width={10}>
          <input
            name="MM"
            value={form.MM}
            onChange={update.filed}
            maxLength={2}
            placeholder="MM"
          />
          <span>/</span>
          <input
            name="YY"
            value={form.YY}
            onChange={update.filed}
            maxLength={2}
            placeholder="YY"
          />
        </InputBox>

        <label>카드 소유자 이름(선택)</label>
        <InputBox>
          <input
            name="name"
            value={form.name}
            onChange={update.filed}
            max={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </InputBox>

        <label>보안코드(CVC/CVV)</label>
        <InputBox width={6}>
          <input
            type="password"
            name="code"
            maxLength={3}
            value={form.code}
            onChange={update.filed}
          />
        </InputBox>

        <label>카드 비밀번호</label>
        <InputBox className="back-white">
          <input
            type="password"
            name="pw0"
            maxLength={1}
            value={form.password[0]}
            onChange={(e) => update.pw(0, e.target.value)}
          />
          <input
            type="password"
            name="pw1"
            maxLength={1}
            value={form.password[1]}
            onChange={(e) => update.pw(1, e.target.value)}
          />
          <span>*</span>
          <span>*</span>
        </InputBox>
      </FormBox>

      <ButtonBox>
        <Button label="다음" onClick={submit} />
      </ButtonBox>

      <SelectColor open={open} onClick={closeModal} />
    </ModalLayout>
  );
};

export default AddCardForm;
