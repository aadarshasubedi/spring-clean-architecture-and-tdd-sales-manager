package io.github.devbhuwan.core.usecase.event;

import org.springframework.context.ApplicationListener;

import static org.springframework.core.GenericTypeResolver.resolveTypeArgument;

public abstract class AbstractUseCaseEventListener<T> implements ApplicationListener<UseCaseEvent> {

    private final Class<?> INTERESTED_TYPE = resolveTypeArgument(getClass(), AbstractUseCaseEventListener.class);

    @Override
    @SuppressWarnings({"unchecked"})
    public final void onApplicationEvent(UseCaseEvent event) {

        Class<?> srcType = event.getSource().getClass();

        //noinspection ConstantConditions
        if (null != INTERESTED_TYPE && !INTERESTED_TYPE.isAssignableFrom(srcType)) {
            return;
        }
        if (event instanceof BeforeExecuteEvent) {
            onBeforeExecute((T) event.getSource());
        } else if (event instanceof AfterExecuteEvent) {
            onAfterExecute((T) event.getSource());
        }
    }

    protected void onBeforeExecute(T entity) {
    }

    protected void onAfterExecute(T entity) {
    }


}