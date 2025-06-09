import { useRef, useState, FormEventHandler } from "react";
import DangerButton from "@/Components/Buttons/DangerButton";
import InputError from "@/Components/Forms/InputError";
import InputLabel from "@/Components/Forms/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import TextInput from "@/Components/Forms/TextInput";
import { useForm } from "@inertiajs/react";

export default function DeleteUserForm({
  className = "",
}: {
  className?: string;
}) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: "",
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Verwijder Account</h2>

        <p className="mt-1 text-sm text-gray-600">
          Zodra je account is verwijderd, worden alle bijbehorende gegevens en
          bronnen permanent verwijderd. Download vooraf alle gegevens of
          informatie die je wilt bewaren.
        </p>
      </header>

      <DangerButton onClick={confirmUserDeletion}>
        Verwijder Account
      </DangerButton>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Weet je zeker dat je je account wilt verwijderen?
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Zodra je account is verwijderd, worden alle bijbehorende gegevens en
            bronnen permanent verwijderd. Voer je wachtwoord in om te bevestigen
            dat je je account definitief wilt verwijderen.
          </p>

          <div className="mt-6">
            <InputLabel
              htmlFor="password"
              value="Wachtwoord"
              className="sr-only"
            />

            <TextInput
              id="password"
              type="password"
              name="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-3/4"
              isFocused
              placeholder="Wachtwoord"
            />

            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Annuleren</SecondaryButton>

            <DangerButton className="ms-3" disabled={processing}>
              Verwijder Account
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
}
