package io.github.devbhuwan.core.usecase.event;

import org.springframework.beans.BeansException;
import org.springframework.beans.ConfigurablePropertyAccessor;
import org.springframework.beans.DirectFieldAccessor;
import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.util.Assert;
import org.springframework.validation.AbstractPropertyBindingResult;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;


public class ValidationErrors extends AbstractPropertyBindingResult {

    private final Object source;

    public ValidationErrors(Object source) {

        super(source.getClass().getSimpleName());

        Assert.notNull(source, "Entity must not be null!");

        this.source = source;
    }

    @Override
    public ConfigurablePropertyAccessor getPropertyAccessor() {

        return new DirectFieldAccessor(getTarget()) {

            @Override
            public Object getPropertyValue(String propertyName) throws BeansException {

                Collection<String> segments = Arrays.asList(propertyName.split("\\."));
                Iterator<String> iterator = segments.iterator();
                Object value = source;

                do {

                    value = lookupValueOn(value, iterator.next());

                } while (iterator.hasNext());

                return value;
            }

            private Object lookupValueOn(Object value, String segment) {
                boolean propertyAccessType = false;
                ConfigurablePropertyAccessor accessor = propertyAccessType
                        ? PropertyAccessorFactory.forBeanPropertyAccess(value)
                        : PropertyAccessorFactory.forDirectFieldAccess(value);

                return accessor.getPropertyValue(segment);
            }
        };
    }

    @Override
    public Object getTarget() {
        return source;
    }
}
